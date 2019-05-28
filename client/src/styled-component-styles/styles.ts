import styled, { css, StyledComponent } from 'styled-components';


// Styles the input element with some padding , margin and font size
const InputTextStyled = styled.input`
        padding: 10px ;
        border-radius: 4px ;
        padding-left: 20px ;
        padding-right: 20px ;
        width:  100% ;
        font-size:  16px ;
        align-self:  center ;
        margin: 10px ;
` ;


// Gives shadow effect with hovering to the enclosed element ( has clicking effect like a button)
const ShadowAndHoverShadow = styled.div`
                margin : 0 ; padding : 0 ; 
                display:inline
                user-select:none ; 
                -webkit-filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .7));
                filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .7));
                transition:all 0.3s ; 
                :hover{
                    transform : scale(1.1) ; 
                    -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
                    filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .5));
                }
                :active{
                    transition:all 0.1s ;
                    transform : scale(1.05) ; 
                    filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .2));
                }
            ` ;


interface ButtonHoverableMdProps {
    bg?: string,
    color?: string,
};

//A styled button with customizations to background and text colors. It extends the ShadowAndHoverShadow ;  
const ButtonHoverableMd = styled(ShadowAndHoverShadow)`
                position:absolute ; 
                bottom:0  ; 
                align-self:center;
                padding:10px;
                padding-left:40px ; 
                padding-right:40px ; 
                margin-bottom:20px;
                background-color:${(p: ButtonHoverableMdProps) => p.bg ? p.bg : '#C43867'};
                border:none ; 
                border-radius : 5px ;
                color:${(p: ButtonHoverableMdProps) => p.color ? p.color : 'white'} ;
    `;



interface PadSideProps {
    val: number
};
const PadSide = styled.div`
        paddingLeft:${(props: PadSideProps) => props.val} ; 
        paddingLeft:${(props: PadSideProps) => props.val} ;
`

export { ShadowAndHoverShadow, ButtonHoverableMd, InputTextStyled }; 