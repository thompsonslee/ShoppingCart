import './ErrorPage.css'
import ErrorBox from '../../Components/ErrorBox/ErrorBox'

export default function ErrorPage(){
    return(
        <div className='ErrorPage'>
            <ErrorBox error='Unfortuately the 3rd party failed to send correct product data :(' />
        </div>
    )
}