import Layout from '../components/Layout'
import Button from '../components/Button'

export default function Home() {
    return (
        <>
            <Layout
                title='HTTP 404 Not Found'
                description='The requested resource could not be found.'
            >
                <p>The requested resource could not be found.</p>
                <Button href='/' title='Go home' />
            </Layout>
        </>
    )
}
