const ContactInfo = ({contact}) => {
    const {name, email, address} = contact || {};

    if(!contact) {
        return <div> is empty</div>
    }

    return <>
    <h3>{name}</h3>
    <div>
        <strong> Email: </strong>
        {email}
    </div>
    </>
}

export default ContactInfo;