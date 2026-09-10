interface Props {
    text: string;
}

const ProfileSkillBullet = ({ text }: Props) => {
    return (
    <li className="
        px-4 py-2
        bg-gray-300 dark:bg-br-gray-600
        text-myf-md text-gray-title dark:text-br-white font-semibold
        rounded-full"
    >
        {text}
    </li>
    )
}

export default ProfileSkillBullet