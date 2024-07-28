import { useState } from "react";
const MedicineTable = (props) =>{
    const {data} = props;
    return(
        <div className="medicineTable">
            {data && 
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map((individualLog) => {
                            return(<tr>
                                <td>{individualLog.created_at}</td>
                                <td>{individualLog.type}</td>
                            </tr>)
                        })
                        }
                        
                    </tbody>
                </table> 
            }
        </div>
    )
}

export default MedicineTable;