import Layout from '../components/Layout'
import Button from '../components/Button'
import ExtButton from '../components/ExtButton'

export default function Home() {
    return (
        <>
            <Layout
                title='Copyright information'
                description='Terms for re-use of content hosted on this website.'
            >
                <div className="parag">
                    <p className="ptext">
                        Unless otherwise noted, content on this site is licensed under the {" "}
                        <a href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivatives 4.0 International</a> {" "}
                        licence.
                    </p>
                </div>

                <br />

                <div className="parag">
                    <p className="ptext">
                        Under this licence, you are free to:
                    </p>

                    <div className="lists">
                        <p className="ptext">
                            <b>Share:</b> {" "}
                            Copy and redistribute this work in any medium or format for any purpose, even commercially
                        </p>
                    </div>
                </div>

                <div className="parag">
                    <p className="ptext">
                        Under the following terms:
                    </p>

                    <div className="lists">
                        <p className="ptext">
                            <b>Attribution:</b> {" "}
                            You must give appropriate credit, provide a link to the licence, and indicate if changes were made. {" "}
                            You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
                        </p>
                        <p className="ptext">
                            <b>NoDerivatives:</b> {" "}
                            If you remix, transform, or build upon this work, you may not distribute the modified work.
                        </p>
                        <p className="ptext">
                            <b>No additional restrictions:</b> {" "}
                            You may not apply legal terms or technological measures that legally restrict others from doing anything the licence permits.
                        </p>
                    </div>
                </div>
                <ExtButton href='https://creativecommons.org/licenses/by-nd/4.0/legalcode' title='View full licence' />
            </Layout>
        </>
    )
}
