import React from 'react'

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="appBuildFont">
                <br />
                <br />

                <h1>Created using: Axios, React and Bootstrap</h1>
                <br />
                <br />

                <li className="abtPageRes">
                    {' '}
                    <a href={'https://github.com/Toughee/CleanReed/projects/1'}>
                        App roadmap
                    </a>{' '}
                </li>

                <li className="abtPageRes">
                    {' '}
                    <a href={'https://github.com/Toughee/CleanReed/wiki'}>
                        App wiki
                    </a>{' '}
                </li>

                <li className="abtPageRes">
                    {' '}
                    <a
                        href={
                            'https://github.com/Toughee/CleanReed/tree/main/docs'
                        }
                    >
                        Documentation for contributors
                    </a>{' '}
                </li>

                <li className="abtPageRes">
                    {' '}
                    <a href={'https://github.com/Toughee/CleanReed'}>
                        Github page
                    </a>{' '}
                </li>
            </div>
        )
    }
}
