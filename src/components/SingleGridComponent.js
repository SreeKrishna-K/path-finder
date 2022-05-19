import React  from "react";
import { useState } from "react";
import './Grid.css';

function ShowGrid(props){

    return(
        <div id="main-grid">
            <RowGenerator new_grid = {props.grid}></RowGenerator>
        </div>
    );
}

function RowGenerator(props){
    return(
        <div id="rows_parent">
            {props.new_grid.map((index, rowId) => {
                return <div className="row" id={"row_" + rowId} key={rowId}>
                    {props.new_grid.map((index,cellId) => {
                        return <Cell rowId={rowId} cellId={cellId} ></Cell>
                    })}
                </div>
            })}
        </div>
    )
}

function Cell(props){
    return(
        <div className="cell" id={"cell_" + props.cellId}>
            <p>{props.rowId}-{props.cellId}</p>
        </div>
    )
}

export default ShowGrid;