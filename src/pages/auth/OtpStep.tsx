import { useState } from 'react'
import { InputPhoneStepContainer, InputPhoneStepInput, InputPhoneStepTitle, LoginButton, ResendOtp } from './auth.style'

type OtpStepProps = {
  phoneNumber: string
  onVerifyOtp: (otp: string) => void
  onResendOtp: () => void
}

const OtpStep: React.FC<OtpStepProps> = ({ phoneNumber, onVerifyOtp, onResendOtp }) => {
  const [otp, setOtp] = useState('')

  const handleVerifyOtp = () => {
    onVerifyOtp(otp)
  }

  return (
    <InputPhoneStepContainer>
      <InputPhoneStepTitle>Verify your phone number</InputPhoneStepTitle>
      {phoneNumber && <p>Enter the OTP sent to {phoneNumber}</p>}
      <InputPhoneStepInput type="text" placeholder="OTP" value={otp} onChange={e => setOtp(e.target.value)} />
      <LoginButton onClick={handleVerifyOtp}>Verify</LoginButton>
      <ResendOtp>
        <span>Didn't receive the OTP?</span>
        <span className="btn-action" onClick={onResendOtp}>
          Resend OTP
        </span>
      </ResendOtp>
    </InputPhoneStepContainer>
  )
}
export default OtpStep
