
export default function LanguageSwitcher({onLangChange}) {
  const handleLangChange = (e) => {
    onLangChange(e.target.value)
  }
  return(
    <>
    <select onChange={handleLangChange} >
      <option value='ar'>ar</option>
      <option value='es'>es</option>
      <option value='en'>en</option>
    </select>
    </>
  )
};
