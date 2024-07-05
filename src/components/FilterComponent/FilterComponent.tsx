import { ChangeEvent } from "react";

interface FilterComponentProps {
    subjectFilters: string[];
    setSubjectFilters: (filters: string[]) => void;
    authorFilters: { start: number, end: number };
    setAuthorFilters: (filters: { start: number, end: number }) => void;
    downloadFilter: { start: number, end: number };
    setDownloadFilters: (filters: { start: number, end: number }) => void;
    applyFilters: () => void;
    handleClearFilters: () => void;
    subjects: Set<string>;
    handleSubjectChange: (e: { target: { value: string } }) => void;
    handleAuthorLife: (e: ChangeEvent<HTMLInputElement>) => void;
    handleDownload: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FilterComponent = ({
    subjectFilters,
    authorFilters,
    downloadFilter,
    applyFilters,
    handleClearFilters,
    subjects,
    handleSubjectChange,
    handleAuthorLife,
    handleDownload,
}: FilterComponentProps) => {

    return (
        <div className="grid grid-cols-4 gap-20 mb-4">
            <div className="col-start-1">
                <span className="text-paragraph font-semibold">Subject Filter:</span>
                <select onChange={handleSubjectChange} className="w-10/12 p-2 border-2">
                    {
                        Array.from(subjects).map((subject: string, index) => (
                            <option value={subject} key={index}>{subject}</option>
                        ))
                    }
                </select>
                <div className="flex flex-wrap">
                    {subjectFilters.map((subject, index) => (<p key={index} className="py-1 px-3 bg-accent rounded-lg m-1">{subject}, </p>))}
                </div>
            </div>
            <div className="col-start-2">
                <span className="text-paragraph font-semibold">Author Filter:</span>
                <div className="flex">
                    <div className="w-1/2">
                        <p>Start date:</p>
                        <p>End date:</p>
                    </div>
                    <div className="w-full">
                        <input className="border-2 px-2" name="start" type="number" value={authorFilters.start} onChange={handleAuthorLife} />
                        <input className="border-2 px-2" name="end" type="number" value={authorFilters.end} onChange={handleAuthorLife} />
                    </div>
                </div>
            </div>
            <div className="col-start-3">
                <span className="text-paragraph font-semibold">Download Filter:</span>
                <div className="flex">
                    <div className="w-1/2">
                        <p>Start count:</p>
                        <p>End count:</p>
                    </div>
                    <div className="w-full">
                        <input className="border-2 px-2" name="start" type="number" value={downloadFilter.start} onChange={handleDownload} />
                        <input className="border-2 px-2" name="end" type="number" value={downloadFilter.end} onChange={handleDownload} />
                    </div>
                </div>
            </div>
            <div>
                <button onClick={applyFilters} className="bg-accent block w-full py-1 rounded-lg hover:bg-accent/80 transition ease-in-out duration-500">Apply filters</button>
                <button onClick={handleClearFilters} className="bg-primary block w-full mt-5 py-1 rounded-lg hover:bg-primary/80 transition ease-in-out duration-500">Clear filters</button>
            </div>
        </div>
    );
}

