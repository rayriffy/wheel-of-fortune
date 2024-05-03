import clsx from "clsx";
import { parse } from "papaparse";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { useSetTicketsAtom } from "./ticketsAtom.ts";
import { RawTableItem, Ticket } from "./types.ts";

export const Setup = () => {
  const setTickets = useSetTicketsAtom();
  const [error, setError] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(false);

    parse<RawTableItem>(acceptedFiles[0], {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const items: Ticket[] = result.data.map((d) => ({
          ref: d["Reference code"],
          name: d.Firstname,
          type: d["Ticket type"],
        }));

        setTickets(items);
      },
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps({
        className: clsx(
          "h-screen flex justify-center items-center px-4",
          isDragActive ? "bg-blue-100" : error ? "bg-red-100" : undefined,
        ),
      })}
    >
      <input
        {...getInputProps({
          className: "",
        })}
      />
      <p>
        <b>Orders & Tickets</b> &gt; <b>Actions</b> &gt; <b>Export as .CSV</b>{" "}
        and drop here
      </p>
    </div>
  );
};
