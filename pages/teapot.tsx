import Layout from '../components/Layout'
import Button from '../components/Button'

export default function Home() {
    return (
        <>
            <Layout
                title='HTTP 418 I&apos;m a teapot'
                description='This server refuses to brew coffee as it is permanently a teapot.'
            >
                <p>This server refuses to brew coffee as it is permanently a teapot. The resulting entity body <em>may</em> be short and stout.</p>
                <Button href='/' title='Go home' />
            </Layout>
        </>
    )
}
