import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Card from "../../components/Card";
import MUITable from "../../components/Table";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import Select, { SelectChangeEvent } from "@mui/material/Select";

const OverviewPage = () => {
    const tableData = {
        columns: [
            { id: "date", label: "Date", minWidth: 170 },
            { id: "time", label: "Time", minWidth: 100 },
            {
                id: "location",
                label: "Location",
                minWidth: 170,
                // align: "right",
                format: (value) => value.toLocaleString("en-US"),
            },
            {
                id: "crime",
                label: "Crime",
                minWidth: 170,
                // align: "right",
                format: (value) => value.toLocaleString("en-US"),
            },
            {
                id: "tag",
                label: "Tag",
                minWidth: 170,
                // align: "right",
                format: (value) => value.toFixed(2),
            },
        ],
        rows: [
            createData("2/2/22", "5:12 am", "Ikeja", "Murder"),
            createData("2/2/22", "9:41 am", "Surulere", "Mugging"),
            createData("2/2/22", "5:12 am", "Ikeja", "Kidnapping"),
            createData("2/2/22", "12:00 am", "Bodija", "Murder"),
            createData("2/2/22", "9:41 am", "Mowe", "Murder"),
            createData("2/2/22", "9:41 am", "Abuja", "Murder"),
            createData("2/2/22", "5:12 am", "Abuja", "Murder"),
            createData("2/2/22", "9:41 am", "Abuja"),
            createData("2/2/22", "5:12 am", "Berger", "Pickpocketting"),
            createData("2/2/22", "9:41 am", "Berger", "Pickpocketting"),
            createData("2/2/22", "9:41 am", "Berger", "Murder"),
            createData("2/2/22", "5:12 am", "Berger", "Murder"),
            createData("2/2/22", "5:12 am", "Berger", "Police Extortion"),
            createData("2/2/22", "5:12 am", "Berger", "Police Extortion"),
            createData("2/2/22", "5:12 am", "Berger", "Murder"),
        ],
    };

    const cardList = [
        { title: "Reported crimes", value: tableData.rows.length },
        { title: "Locations on watch", value: 24 },
        { title: "Reported crimes", value: tableData.rows.length },
    ];

    function createData(date, time, location, crime) {
        return { date, time, location, crime };
    }

    const filters = ["All", "Today", "This Week", "This Month"];
    const [filter, setFilter] = useState(filters[0]);

    const handleChange = (ev) => {
        setFilter(ev.target.value);
    };

    return (
        <DashboardLayout>
            <div className="flex flex-row items-start gap-8 justify-between flex-wrap">
                {cardList.map((card) => (
                    <Card cardData={card} />
                ))}
            </div>
            <div className="mt-12">
                <div className="w-48 ml-auto mb-5">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Filter
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={filter}
                            label="Filter"
                            onChange={handleChange}
                        >
                            {filters.map((item) => (
                                <MenuItem value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <MUITable tableData={tableData} />
            </div>
        </DashboardLayout>
    );
};

export default OverviewPage;
