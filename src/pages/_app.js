import { Container } from "@ui-propulsion/react-components";
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <Container className="project-container">
        <Component {...pageProps} />
    </Container>
  )
}