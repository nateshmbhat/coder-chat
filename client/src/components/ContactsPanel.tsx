import React from 'react'; 
import { connect} from 'react-redux';

interface ContactsSectionProp {
    totalRows : number ;
}

const ContactsSection: React.FC<ContactsSectionProp> = (props) => {

    const totalRows = props.totalRows
    return (
        <div style={{ 
            backgroundColor: '#c4c4c4', 
            zIndex :10 , 
            gridColumn: '1 / 3' , 
            boxShadow:'0.1px -15px 15px black' , 
            gridRow:`1 / ${totalRows+1}` 
            }} >
        </div>
    );
}

const mapStateToProps = (state: ContactsSectionProp)=>({ totalRows : state.totalRows });

export default connect(mapStateToProps)(ContactsSection) ; 