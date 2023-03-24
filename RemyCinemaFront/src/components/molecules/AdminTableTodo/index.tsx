import React, { useEffect, useState } from "react";
import { CgDatabase } from "react-icons/cg";
import { TableTodoColumnType } from "../../../interfaces";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./index.scss";
import Button from "../../atoms/Button";

interface AdminTableTodoProps {
  headers: TableTodoColumnType[];
  dataSource: any[];
  itemsPerPage: number;
}

const AdminTableTodo = ({
  headers,
  dataSource,
  itemsPerPage,
}: AdminTableTodoProps) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [sliceValue, setSliceValue] = useState<number>(itemsPerPage);

  const numberOfPages = Math.ceil(dataSource?.length / itemsPerPage);
  const nextPage = () => {
    if (pageNumber < numberOfPages) {
      setPageNumber(pageNumber + 1);
      setSliceValue(sliceValue + itemsPerPage);
    }
  };
  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      setSliceValue(sliceValue - itemsPerPage);
    }
  };

  const paginatedItems = dataSource.slice(
    sliceValue - itemsPerPage,
    sliceValue
  );

  useEffect(() => {
    setPageNumber(1);
    setSliceValue(itemsPerPage);
  }, [dataSource]);

  return (
    <div className="admintabletodo_container">
      <div className="admintabletodo_head">
        <ul>
          {headers &&
            headers?.map((head: TableTodoColumnType) => {
              return (
                <li key={head.key}>
                  <p>{head.title}</p>
                </li>
              );
            })}
        </ul>
      </div>
      <div
        className="admintabletodo_body"
        style={{ minHeight: `${itemsPerPage * 56}px` }}
      >
        {dataSource.length > 0 ? (
          <ul>
            {paginatedItems &&
              paginatedItems?.map((data, index) => {
                return (
                  <li className="admintabletodo_body_item" key={index}>
                    <ul>
                      {Object.keys(data)?.map((prop, index) => {
                        return (
                          <li key={index}>
                            <div className="item_container">{data[prop]}</div>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
          </ul>
        ) : (
          <div
            className="admintabletodo_no_data_available"
            style={{ minHeight: `${itemsPerPage * 50}px` }}
          >
            <CgDatabase />
            <p>No hay datos para mostrar.</p>
          </div>
        )}
      </div>
      <div className="admintabletodo_paginated">
        <div className="admintabletodo_paginated_buttons">
          <Button
            type="button"
            disabled={pageNumber === 1}
            icon={<MdKeyboardArrowLeft />}
            className="tertiary_button"
            onClick={() => previousPage()}
            styles={{ padding: "3px", borderRadius: "5px" }}
          />
          <div className="admintabletodo_results_page_info">
            {dataSource.length > 0 ? (
              <p>
                Página {pageNumber} de {numberOfPages}
              </p>
            ) : (
              <p>Sin resultados </p>
            )}
          </div>
          <Button
            type="button"
            disabled={pageNumber === numberOfPages}
            icon={<MdKeyboardArrowRight />}
            className="tertiary_button"
            onClick={() => nextPage()}
            styles={{ padding: "3px", borderRadius: "5px" }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default AdminTableTodo;
