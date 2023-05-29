import { auth, RecaptchaVerifier, signInWithPhoneNumber } from 'config/firebase.config'
import { ConfirmationResult } from 'firebase/auth'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from 'store/slices/user.slice'
import {
  AuthButton,
  AuthContainer,
  InputPhoneStepContainer,
  InputPhoneStepInput,
  InputPhoneStepTitle
} from './auth.style'

type PhoneNumberStepProps = {
  onNextStep: (phoneNumber: string) => void
}

type OtpStepProps = {
  phoneNumber: string
  onVerifyOtp: (otp: string) => void
  onResendOtp: () => void
}

type Step = 'phoneNumber' | 'otp'

const PhoneNumberStep: React.FC<PhoneNumberStepProps> = ({ onNextStep }) => {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleNextStep = () => {
    onNextStep(phoneNumber)
  }

  return (
    <InputPhoneStepContainer>
      <InputPhoneStepTitle>Step 1: Enter your phone number</InputPhoneStepTitle>
      <InputPhoneStepInput
        type="text"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />
      <AuthButton onClick={handleNextStep}>Next</AuthButton>
    </InputPhoneStepContainer>
  )
}

const OtpStep: React.FC<OtpStepProps> = ({ phoneNumber, onVerifyOtp, onResendOtp }) => {
  const [otp, setOtp] = useState('')

  const handleVerifyOtp = () => {
    onVerifyOtp(otp)
  }

  return (
    <InputPhoneStepContainer>
      <InputPhoneStepTitle>Step 2: Verify your phone number</InputPhoneStepTitle>
      {phoneNumber && <p>Enter the OTP sent to {phoneNumber}</p>}
      <InputPhoneStepInput type="text" placeholder="OTP" value={otp} onChange={e => setOtp(e.target.value)} />
      <AuthButton marginBottom="8px" onClick={handleVerifyOtp}>
        Verify
      </AuthButton>
      <AuthButton onClick={onResendOtp}>Resend OTP</AuthButton>
    </InputPhoneStepContainer>
  )
}

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
    <AuthContainer>
      <div id="recapcha-container"></div>
      {step === 'phoneNumber' && <PhoneNumberStep onNextStep={handleNextStep} />}
      {step === 'otp' && (
        <OtpStep phoneNumber={phoneNumber} onVerifyOtp={handleVerifyOtp} onResendOtp={handleResendOtp} />
      )}
    </AuthContainer>
  )
}

export default PhoneNumberOtpComponent
