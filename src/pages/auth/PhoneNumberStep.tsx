import { useState } from 'react'
import { InputPhoneStepContainer, InputPhoneStepInput, InputPhoneStepTitle, Label, LoginButton } from './auth.style'

type PhoneNumberStepProps = {
  onNextStep: (phoneNumber: string) => void
}

const PhoneNumberStep: React.FC<PhoneNumberStepProps> = ({ onNextStep }) => {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleNextStep = () => {
    onNextStep(phoneNumber)
  }

  return (
    <InputPhoneStepContainer>
      <InputPhoneStepTitle>Enter your phone number</InputPhoneStepTitle>
      <Label htmlFor="phone">Phone number</Label>
      <InputPhoneStepInput
        type="text"
        placeholder="+84988888888"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />
      <LoginButton onClick={handleNextStep}>Next</LoginButton>
    </InputPhoneStepContainer>
  )
}
export default PhoneNumberStep
