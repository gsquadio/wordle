import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const MissionModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About Mission" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <a href="https://www.mission.dev/?utm_source=hello-wordle&utm_medium=referral&utm_campaign=labs" className="underline font-bold">Mission</a> is a market network for software engineers and developers.
      </p>
    </BaseModal>
  )
}
