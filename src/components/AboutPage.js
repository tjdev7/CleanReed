import React from 'react'

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="AboutPageStyle">
                <br />
                <br />

                <h1>Created using: Axios, React and Bootstrap</h1>
                <br />
                <br />

                <h2 className="abtPageRes">
                    {' '}
                    <a href={'https://github.com/Toughee/CleanReed/projects/1'}>
                        App roadmap
                    </a>{' '}
                </h2>

                <h2 className="abtPageRes">
                    {' '}
                    <a href={'https://github.com/Toughee/CleanReed/wiki'}>
                        App wiki
                    </a>{' '}
                </h2>

                <h2 className="abtPageRes">
                    {' '}
                    <a
                        href={
                            'https://github.com/Toughee/CleanReed/tree/main/docs'
                        }
                    >
                        Documentation for contributors
                    </a>{' '}
                </h2>

                <h2 className="abtPageRes">
                    {' '}
                    <a href={'https://github.com/Toughee/CleanReed'}>
                        Github page
                    </a>{' '}
                </h2>
            </div>
        )
    }
}
