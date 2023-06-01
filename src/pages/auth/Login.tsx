import { auth, RecaptchaVerifier, signInWithPhoneNumber } from 'config/firebase.config'
import { ConfirmationResult } from 'firebase/auth'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from 'store/slices/user.slice'
import { LoginContainer } from './auth.style'
import OtpStep from './OtpStep'
import PhoneNumberStep from './PhoneNumberStep'

type Step = 'phoneNumber' | 'otp'

const PhoneNumberOtpComponent: React.FC = () => {
  const [step, setStep] = useState<Step>('phoneNumber')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [confirm, setConfirm] = useState<ConfirmationResult>()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNextStep = (phoneNumber: string) => {
    if (phoneNumber === '') return
    setPhoneNumber(phoneNumber)
    onSignInSubmit(phoneNumber)
    setStep('otp')
  }

  const onSignInSubmit = (phone: string) => {
    const appVerifier = new RecaptchaVerifier(
      'recapcha-container',
      {
        size: 'invisible'
      },
      auth
    )
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then(confirmationResult => {
        setConfirm(confirmationResult)
      })
      .catch(error => {
        console.error('SMS Send Error: ', error)
      })
  }

  const handleVerifyOtp = (otp: string) => {
    if (!confirm) return
    confirm
      .confirm(otp)
      .then((result: any) => {
        dispatch(login(result.user))
        alert('OTP verified successfully!')
        setTimeout(() => {
          navigate('/')
        }, 1000)
      })
      .catch((_error: any) => {
        alert('Invalid OTP. Please try again.')
      })
  }

  const handleResendOtp = () => {
    alert('OTP resent successfully!')
  }

  return (
    <LoginContainer>
      <div id="recapcha-container"></div>
      {step === 'phoneNumber' && <PhoneNumberStep onNextStep={handleNextStep} />}
      {step === 'otp' && (
        <OtpStep phoneNumber={phoneNumber} onVerifyOtp={handleVerifyOtp} onResendOtp={handleResendOtp} />
      )}
    </LoginContainer>
  )
}

export default PhoneNumberOtpComponent
