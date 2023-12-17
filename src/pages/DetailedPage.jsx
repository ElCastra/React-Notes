import { Link, useParams } from "react-router-dom";
import { editNote, getNote } from "../utils/local-data";
import NewBtn from "../components/Button/NewBtn";
import { Icon } from '@iconify/react'
import arrow from '../assets/arrow.png'
import PropTypes from 'prop-types';


export default function DetailedPage() {
  let { noteId } = useParams();
  const noteDetail = getNote(noteId);

  // Untuk menyimpan data contentEditable
  const titleChange = event => {
    const title = event.target.innerText
    editNote({ ...noteDetail, id: noteId, title: title })
  }

  const bodyChange = event => {
    const body = event.target.innerText


    editNote({ ...noteDetail, id: noteId, body: body })
  }

  return (
    <main className="max-w-xl lg:max-w-4xl mx-auto bg-">
      <header>
        <h1 className=" absolute left-5 top-10 lg:left-44 text-xl handwrite text-slate-500">Edit Notemu Disini!</h1>
        <img src={arrow} alt="arrow" className="absolute w-[80px] h-[80px] left-24 lg:w-[125px] lg:h-[125px] top-16 lg:left-[300px] opacity-50" />
      </header>
      <section className="flex flex-col justify-center relative top-[200px]">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center mb-10 focus:outline-none" suppressContentEditableWarning={true} onInput={titleChange} contentEditable>{noteDetail.title}</h1>
        <p className="mx-5 lg:text-lg focus:outline-none" suppressContentEditableWarning={true} onInput={bodyChange} contentEditable>{noteDetail.body}</p>
      </section>
      <label className="swap swap-rotate mr-6 btn btn-outline btn-lg border-neutral btn-circle text-2xl fixed bottom-32 right-[16px]">
        <input type="checkbox" className="theme-controller" value="night" />

        <Icon
          className="swap-on fill-current md:w-10 md:h-10 w-6 h-6"
          icon="uil:moon"
        />

        <Icon
          className="swap-off fill-current md:w-10 md:h-10 w-6 h-6"
          icon="uil:sun"
        />

      </label>
      <div className=" fixed bottom-10 right-10">
        <NewBtn />
      </div>
    </main>
  );
}


DetailedPage.propTypes = {
  noteId: PropTypes.object,
}


