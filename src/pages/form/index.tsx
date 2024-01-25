type Customer = {
    firstName?: string
}

type Props = {
    original?: Customer
}

const Form = ({original}: Props) => {
    return <form title="Register">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" data-testid="firstName" name="firstName" value={original?.firstName} readOnly/>
        <input type="submit" value="Add" />
    </form>
}

export default Form
