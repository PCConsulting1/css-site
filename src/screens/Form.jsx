/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form'

/**
 * List of colleges
 * a. On/Off Campus
 * Use previous information to fill out other questions
 */

import TextInput from '../components/form/TextInput.component'
import EmailInput from '../components/form/Emailinput.component'
import SelectInput from '../components/form/SelectInput.component'
import CheckboxInput from '../components/form/CheckboxInput.component'
import DateInput from '../components/form/DateInput.component'
import PhoneInput from '../components/form/PhoneInput.component'

export default function CSSForm() {
  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    validateCriteriaMode: 'all',
  })
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        paddingTop: 20,
        display: 'flex',
        justifyContent: 'space-around',
        rowGap: 15,
        flexWrap: 'wrap',
        maxWidth: '100vw',
      }}
    >
      <TextInput name="firstName" control={control} label="First Name" />
      <TextInput
        name="middleName"
        control={control}
        label="Middle Name"
        isRequired={false}
      />
      <TextInput name="lastName" control={control} label="Last Name" />
      <EmailInput name="bestContactEmail" control={control} label="Email" />
      <PhoneInput name="studentPhone" control={control} label="Phone Number" />
      <DateInput
        name="studentDateOfBirth"
        control={control}
        label="Date of Birth"
      />
      <SelectInput
        name="maritalStatus"
        control={control}
        label="Marital Status"
        options={['Single', 'Married', 'Divorced/Widowed']}
      />
      <SelectInput
        name="citizenshipStatus"
        control={control}
        label="Citizenship Status"
        options={['U.S. citizen', 'U.S. eligible non-citizen', 'Other']}
      />
      <CheckboxInput
        name="studentHasDependents"
        control={control}
        label="Student has legal dependents"
      />
      <CheckboxInput
        name="studentIsVeteran"
        control={control}
        label="Student is a veteran or currently serving on active duty"
      />
      <CheckboxInput
        name="studentIsEmancipatedMinor"
        control={control}
        label="Student was determined to be an emancipated minor by a court in their state"
      />
      <CheckboxInput
        name="studentIshomeless"
        control={control}
        label="Student is homeless or at risk of becoming homeless"
      />
      <CheckboxInput
        name="studentWasWardOfCourt"
        control={control}
        label="Student was a ward of the court"
      />
      <CheckboxInput
        name="studentWasFosterCare"
        control={control}
        label="Student was in foster care"
      />
      <TextInput
        name="studentStreetAddress"
        control={control}
        label="Street address"
      />
      <TextInput
        name="studentStreetAddress2"
        control={control}
        label="Street address (line 2)"
      />
      {/* use teleport api to get country/state/city info */}
      {/* http://developers.teleport.org/api/reference/#/ */}
      <TextInput name="studentCity" control={control} label="City" />
      <TextInput name="studentCountry" control={control} label="Country" />
      <TextInput
        name="studentState"
        control={control}
        label="State/Province/Region"
      />
      <TextInput
        name="studentZipCode"
        control={control}
        label="Zip/Postal Code"
      />
      <TextInput
        name="studentSocialSecurityNumber"
        control={control}
        label="Social Security Number"
      />

      <input type="submit" />
    </form>
  )
}
