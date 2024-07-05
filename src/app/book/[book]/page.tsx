"use client"
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar"
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import { Book } from "@/types/Book";
import { formatName } from "@/utils/formatName";
import { Tag } from "@/components/Tag";
import { IoMdDownload } from "react-icons/io";

export default function BookPage({ params }: { params: { book: string } }) {

  const {
    data,
    loading,
    fetchData
  } = useFetch<Book>()

  useEffect(() => {
    const setup = async () => {
      await fetchData(`https://gutendex.com/books/${params.book}`)
    }
    setup()
  }, [])

  return (
    <main>
      <div className="mx-40">
        <Navbar type="general" />
      </div>
      {
        loading ? <Loader /> : (
          <div className="max-w-[600px] mx-auto mt-8">
            <div className="mx-4">
              <div className="flex justify-center">
                <img src={data?.formats["image/jpeg"]} className="drop-shadow-lg" />
              </div>
              <div>
                <p className="text-small-body text-center">(bookid: {data?.id})</p>
                <h1 className="font-libre text-header text-center font-semibold underline">{data?.title}</h1>
                <p className="text-paragraph text-center mb-4">{data?.authors.map((author, index) => `${formatName(author.name)} ${index < data?.authors.length - 1 ? "," : ""}`)}</p>
                <h1 className="font-semibold font-libre text-header underline">Subjects</h1>
                <div className="flex flex-wrap">
                  {
                    data?.subjects.map((subject, index) => (
                      <Tag title={subject} key={index} />
                    ))
                  }
                </div>

                <div className="flex justify-between my-4">
                  <div>
                    <h1 className="font-semibold font-libre text-header underline">Languages</h1>
                    <ul>
                      {
                        data?.languages.map((lang, index) => (
                          <li className="list-disc ml-5" key={index}>{lang}</li>
                        ))
                      }
                    </ul>
                  </div>

                  <div className={`${data?.copyright ? "bg-green-500" : "bg-red-500"} my-auto px-5 py-2 rounded-full text-white font-source`}>
                    <p>
                      {
                        data?.copyright ? "Copyright" : "No Copyright"
                      }
                    </p>
                  </div>
                </div>

                <a href={data?.formats["application/epub+zip"]} className="flex bg-secondary hover:bg-accent justify-center py-3 rounded-lg transition ease-in-out duration-700">
                  <span>Download epub</span>
                  <IoMdDownload className="mx-2 my-auto" />
                </a>
                <p className="text-small-body flex justify-end">{data?.download_count} total downloads</p>
              </div>
            </div>
          </div>
        )
      }
    </main>
  );
}