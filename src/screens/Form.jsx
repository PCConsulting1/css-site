/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form'

/**
 * List of colleges
 * a. On/Off Campus
 * Phone number for student and parents
 * Email for student and parents
 * Student information:
 * 1. Last Name
 * 2. First Name
 * 3. Middle Initial
 * 4. Permanent Address
 * 5. City
 * 6. State
 * 7. Zip Code
 * 8. Date of Birth
 * 9. Phone Number
 * 10. Email Address
 * 11. Citizenship Status
 * 12. Eligible non-citizen
 * 13. Alien registration #
 * 14. Marital Status
 * 15. Month/Year married
 * 16. Become resident of state 5 years ago
 * 17. If no, what year
 * 18. Highest grade completed by father
 * 19. Highest grade completed by mother
 * 20. When you start college, high school status will be?
 * 21. Name of high school where you received diploma
 * 22. city state of high school
 * 23. Will you have your first bachelor's degree before July 1, 2023
 * 24. What is students grade level in 2023-2024 academic year?
 * 25. When you begin college what degree will you be working on?
 * 26. Are you interested in work study?
 * 27. Have parents filed IRS Tax return? already filed, will file, will not file
 * 28. What form will be filed? IRS 1040, foreign return, us territorial return,
 * 29. Did you file schedule 1, schedule 2, schedule 3?
 * 30. Is either parent a dislocated worker?
 * 31. Need all tax forms
 * 32. Non-retirement asset information
 */

import TextInput from '../components/form/TextInput.component'
import EmailInput from '../components/form/Emailinput.component'
import SelectInput from '../components/form/SelectInput.component'

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
        label="test"
        options={['one', 'two', 'three']}
      />
      <label htmlFor="field-citizen">
        <input
          {...register('Citizenship status')}
          type="radio"
          value="U.S. Citizen"
          id="field-citizen"
        />
        U.S. Citizen
      </label>
      <label htmlFor="field-citizen">
        <input
          {...register('Citizenship status')}
          type="radio"
          value="U.S eligible non-citizen"
          id="field-non-citizen"
        />
        U.S eligible non-citizen
      </label>
      <input type="checkbox" {...register('studentHasDependants')} />
      <input type="checkbox" {...register('studentIsVeteran')} />
      <input type="checkbox" {...register('studentIsemancipatedMinor')} />
      <input type="checkbox" {...register('studentIshomeless')} />
      <input type="checkbox" {...register('studentWasWardOfCourt')} />
      <input type="checkbox" {...register('studentWasFosterCare')} />
      <select {...register('gender')}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  )
}
