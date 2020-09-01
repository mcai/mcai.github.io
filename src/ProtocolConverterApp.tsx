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
                        title: "设备",
                        href: "/",
                        active: true
                    },
                    {
                        title: "协议",
                        href: "/",
                        active: true
                    },
                    {
                        title: "数据",
                        href: "/",
                        active: true
                    },
                    {
                        title: "设置",
                        href: "/",
                        active: true
                    },
                    {
                        title: "日志",
                        href: "/",
                        active: true
                    },
                    {
                        title: "统计",
                        href: "/",
                        active: true
                    },
                    {
                        title: "帮助",
                        href: "/",
                        active: true
                    },
                ]}
            />

            <SimpleBreadcrumb items={[
                {
                    title: "主页",
                    href: "/"
                },
                {
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
