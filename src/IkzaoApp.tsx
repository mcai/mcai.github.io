import React from 'react';
import {SimpleFooter} from "@itecgo/blocks/dist/components/SimpleFooter/SimpleFooter";
import {SimpleBreadcrumb} from "@itecgo/blocks/dist/components/SimpleBreadcrumb/SimpleBreadcrumb";
import {SimpleNavbar} from "@itecgo/blocks/dist/components/SimpleNavbar/SimpleNavbar";

export class IkzaoApp extends React.Component {
  render() {
    return (
        <div>
            <SimpleNavbar
                brand={{
                    title: "蚁克造",
                    href: "/"
                }}
                items={[
                    {
                        title: "员工",
                        href: "/",
                        active: true
                    },
                    {
                        title: "客户",
                        href: "/",
                        active: true
                    },
                    {
                        title: "文档",
                        href: "/",
                        active: true
                    },
                    {
                        title: "图纸",
                        href: "/",
                        active: true
                    },
                    {
                        title: "报价单",
                        href: "/",
                        active: true
                    },
                    {
                        title: "订单",
                        href: "/",
                        active: true
                    },
                    {
                        title: "加工",
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
                    title: "员工管理",
                    active: true
                },
            ]}/>

            <SimpleFooter brand={{
                title: "蚁克造 (C) 2020",
                href: "http://www.ikzao.com:3000/"
            }}/>
        </div>
    );
  }
}
