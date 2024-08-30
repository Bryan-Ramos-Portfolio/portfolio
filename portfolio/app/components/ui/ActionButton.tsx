
interface ActionButtonProps {
    text: string;
    href: string;
}

function ActionButton({text, href} : ActionButtonProps ) {
  return (
    <a className='border-b-[0.2rem] pb-2 border-[#CCF9FF] hover:text-[#CCF9FF] transition-all durtation-200' href={href}>{text.toUpperCase()}</a>
  )
}

export default ActionButton