/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form'

/**
 * List of colleges
 * a. On/Off Campus
 */

import TextInput from '../components/form/TextInput.component'
import EmailInput from '../components/form/Emailinput.component'
import SelectInput from '../components/form/SelectInput.component'
import CheckboxInput from '../components/form/CheckboxInput.component'

export default function CSSForm() {
  const { register, handleSubmit, control } = useForm({
    mode: 'onChange',
    validateCriteriaMode: 'all',
  })
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ paddingTop: 20 }}>
      <TextInput name="firstName" control={control} label="First Name" />
      <TextInput name="middleName" control={control} label="Middle Name" />
      <TextInput name="lastName" control={control} label="Last Name" />
      <TextInput name="bestContactPhone" control={control} label="Phone" />
      <EmailInput name="bestContactEmail" control={control} label="Email" />
      <TextInput name="dateOfBirth" control={control} label="Date of Birth" />
      <TextInput
        name="maritalStatus"
        control={control}
        label="Marital Status"
      />
      <SelectInput
        name="Citizenship status"
        control={control}
        options={['U.S. citizen', 'U.S. eligible noncitizen', 'Other']}
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
      <select {...register('gender')}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  )
}
