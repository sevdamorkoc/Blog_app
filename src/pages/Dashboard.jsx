import { Grid } from "@mui/material"
import BlogCard from "../components/blog/BlogCard"
const Dashboard = () => {
  return (
    <Grid container spacing={2} sx={{minHeight:"90vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <BlogCard />
    </Grid>
  )
}
export default Dashboard