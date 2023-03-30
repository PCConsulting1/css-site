import Container  from "react-bootstrap/Container"

export default function ContentContainer({children}){
    return <Container fluid="md" style={{maxWidth: 1280}}>{children}</Container>
}