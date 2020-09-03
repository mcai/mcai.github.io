import React from 'react';
import {SimpleNavbar} from "@itecgo/blocks/dist/components/SimpleNavbar/SimpleNavbar";
import {SimpleRoute} from "@itecgo/blocks/dist/components/SimpleApp/SimpleRoute";
import {SimpleApp} from "@itecgo/blocks/dist/components/SimpleApp/SimpleApp";

export class App extends React.Component<any, any> {
    render() {
        let navbar = (
            <SimpleNavbar
                brand={{
                    title: "mcai.github.io - MCAI's Tips",
                    href: "/"
                }}
                sections={[
                    {
                        id: "tips",
                        title: "Tips",
                        items: [
                            {
                                key: "tips",
                                title: "Tips",
                                href: "/tips"
                            }
                        ]
                    },
                    {
                        id: "about",
                        title: "About",
                        items: [
                            {
                                key: "about",
                                title: "About",
                                href: "/about"
                            }
                        ]
                    }
                ]}
            />
        );

        let routes: SimpleRoute[] = [
            {
                path: "/tips",
                page: (<span>Tips</span>)
            }
        ];

        return <SimpleApp navbar={navbar} routes={routes}/>;
    }
}
