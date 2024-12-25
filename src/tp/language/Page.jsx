import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
const languageScript =
  {
    'ar': 'السلام عليكم',
    'en': 'hello World',
    'es':'Hola El Mondo'
  }
export default function Page(params) {
  const [lang, setLang] = useState('ar');
  console.log(languageScript[lang]);

  return (
    <>
      <LanguageSwitcher onLangChange={lang=>setLang(lang)} />
              <div className="">{languageScript[lang]}</div>

    </>
  )
};
