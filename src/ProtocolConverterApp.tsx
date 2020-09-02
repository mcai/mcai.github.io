import React from 'react';
import {SimpleFooter} from "@itecgo/blocks/dist/components/SimpleFooter/SimpleFooter";
import {SimpleBreadcrumb} from "@itecgo/blocks/dist/components/SimpleBreadcrumb/SimpleBreadcrumb";
import {SimpleNavbar} from "@itecgo/blocks/dist/components/SimpleNavbar/SimpleNavbar";

export class ProtocolConverterApp extends React.Component {
  render() {
    return (
        <div>
            <SimpleNavbar
                brand={{
                    title: "协议转换网络",
                    href: "/"
                }}
                items={[
                    {
                        key: "converters",
                        title: "设备",
                        href: "/",
                        active: true
                    },
                    {
                        key: "protocols",
                        title: "协议",
                        href: "/",
                        active: true
                    },
                    {
                        key: "dataDictionaries",
                        title: "数据",
                        href: "/",
                        active: true
                    },
                    {
                        key: "settings",
                        title: "设置",
                        href: "/",
                        active: true
                    },
                    {
                        key: "eventLogs",
                        title: "日志",
                        href: "/",
                        active: true
                    },
                    {
                        key: "help",
                        title: "帮助",
                        href: "/",
                        active: true
                    },
                ]}
            />

            <SimpleBreadcrumb items={[
                {
                    key: "home",
                    title: "主页",
                    href: "/"
                },
                {
                    key: "converters",
                    title: "设备管理",
                    active: true
                },
            ]}/>

            <SimpleFooter brand={{
                title: "协议转换网络 (C) 2020",
                href: "http://www.protocolconverter.com:3000/"
            }}/>
        </div>
    );
  }
}
