import Nav from "./nav"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLemon } from '@fortawesome/free-regular-svg-icons'
import { decode } from "html-entities"

export default function Home() {
  return (
    <>
      <Nav />
      <div className="overflow-auto no-scrollbar max-md:h-144 h-160">
        <div className="w-max mx-auto mt-32 flex flex-col justify-center items-center space-y-4">
          <FontAwesomeIcon icon={faLemon} className="text-9xl" />
          <h1 className='font-bold text-4xl'>Review well!</h1>
        </div>
        <div className="max-md:w-11/12 mx-auto mt-32">
          <h1 className="font-bold text-3xl">Reminders:</h1>
          <ol className="list-disc indent-2">
            {reminders.map((reminder, index) => (
              <li key={index}>
                {reminder}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  )
}
const reminders = [
  "hilahin kita pababa:)))",
  "sorry na agad muhehehe",
  "eme",
  "dagdagan ko soon",
  "to be followed and ibang subjects",
  "if may reviewer ka, penge",
  "for sure marami pang bug to so...",
  "please dont be inlove with someone else",
  "ako na lang kase",
  `iyak ako ${decode("&#128557; &#128557;")}`,
  "anyways",
  "review well",
  `goodluck ${decode("&hearts; &hearts;")}`,
  ":)))",
]