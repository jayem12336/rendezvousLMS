import React from 'react'
import "./style.css";
import ClipDrawer from '../../Dashboardcomponent/Clipdrawer';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
export default function CalendarContent() {

    const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 20);
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 6);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 25);

    return (
        <div>
            <ClipDrawer>
                    <CalendarComponent
                        value={dateValue}
                        min={startDate}
                        max={endDate}
                        start="Decade"
                    ></CalendarComponent>

            </ClipDrawer>
        </div>
    )
}
