import 'bootstrap/dist/css/bootstrap.min.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
    return (
        <>
          <footer className="d-flex justify-content-between">
            <div className='d-flex gap-4'>
                <GitHubIcon fontSize="large"/>
                <FacebookIcon fontSize='large'/>
                <LinkedInIcon fontSize='large'/>
            </div>
            <div>
                <h2>Blog</h2>
            </div>
          </footer>
        </>
    )
}