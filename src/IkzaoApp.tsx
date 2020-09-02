import React from 'react';
import {SimpleFooter} from "@itecgo/blocks/dist/components/SimpleFooter/SimpleFooter";
import {SimpleBreadcrumb} from "@itecgo/blocks/dist/components/SimpleBreadcrumb/SimpleBreadcrumb";
import {SimpleNavbar} from "@itecgo/blocks/dist/components/SimpleNavbar/SimpleNavbar";
import {SimpleTable} from "@itecgo/blocks/dist/components/SimpleTable/SimpleTable";
import {SimpleDataProvider} from "@itecgo/blocks/dist/data/SimpleDataProvider";
import {SimpleRestDataProvider} from "@itecgo/blocks/dist/data/SimpleRestDataProvider";
import {SimpleTextField} from "@itecgo/blocks/dist/fields/SimpleTextField";
import {SimpleBooleanField} from "@itecgo/blocks/dist/fields/SimpleBooleanField";
import {SimpleDateTimeField} from "@itecgo/blocks/dist/fields/SimpleDateTimeField";
import {SimpleNumberField} from "@itecgo/blocks/dist/fields/SimpleNumberField";

export class IkzaoApp extends React.Component<any, any> {
    dataProvider: SimpleDataProvider

    constructor(props: any) {
        super(props);

        this.dataProvider = new SimpleRestDataProvider("http://www.ikzao.com:5000/rest/");
    }

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
                            key: "operators",
                            title: "员工",
                            href: "/",
                            active: true
                        },
                        {
                            key: "customers",
                            title: "客户",
                            href: "/",
                            active: true
                        },
                        {
                            key: "documents",
                            title: "文档",
                            href: "/",
                            active: true
                        },
                        {
                            key: "designDocuments",
                            title: "图纸",
                            href: "/",
                            active: true
                        },
                        {
                            key: "quotations",
                            title: "报价单",
                            href: "/",
                            active: true
                        },
                        {
                            key: "orders",
                            title: "订单",
                            href: "/",
                            active: true
                        },
                        {
                            key: "nestings",
                            title: "加工",
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
                            key: "summaries",
                            title: "统计",
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
                        key: "operators",
                        title: "客户管理",
                        active: true
                    },
                ]}/>

                <SimpleTable
                    pageSize={10}
                    pageNum={0}
                    dataProvider={this.dataProvider}
                    resource={"customers/"}
                    action={"getCustomers/"}
                    fields={[
                        new SimpleNumberField("编号", "id", 0),
                        new SimpleDateTimeField("创建时间", "date"),
                        new SimpleTextField("名称", "name"),
                        new SimpleTextField("手机号码", "mobile"),
                        new SimpleBooleanField("是否合法", "mobileIsValid")
                    ]}
                />

                <SimpleFooter brand={{
                    title: "蚁克造 (C) 2020",
                    href: "http://www.ikzao.com:3000/"
                }}/>
            </div>
        );
    }
}