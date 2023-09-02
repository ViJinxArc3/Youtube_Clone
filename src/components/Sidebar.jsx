import { Stack } from "@mui/material";
import { categories } from "../assets/constants";



const Sidebar = ({selectedItem, setSelectedItem}) => (
    <Stack className="sidebar-container" direction="row" sx={{height: {sx:'auto', md: '95%'}, 
    flexDirection: {md: 'column'}}}>

    {categories.map((category) => (
    <button className="category-btn" 
    onClick={() => setSelectedItem(category.name)}
    style={{background: category.name === selectedItem && '#a1a1a1'}} 
    key={category.name}>
        <span className="icon-span">{category.icon}</span>
        <span className="name-span">{category.name}</span>
    </button>
    ))}

    </Stack>
  )


export default Sidebar