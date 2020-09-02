import React from 'react';
import {SimpleFooter} from "@itecgo/blocks/dist/components/SimpleFooter/SimpleFooter";
import {SimpleBreadcrumb} from "@itecgo/blocks/dist/components/SimpleBreadcrumb/SimpleBreadcrumb";
import {SimpleNavbar} from "@itecgo/blocks/dist/components/SimpleNavbar/SimpleNavbar";
import {SimpleTable} from "@itecgo/blocks/dist/components/SimpleTable/SimpleTable";
import {Formatting} from "@itecgo/blocks/dist/utils/Formatting";
import {SimpleDataProvider} from "@itecgo/blocks/dist/data/SimpleDataProvider";
import {SimpleRestDataProvider} from "@itecgo/blocks/dist/data/SimpleRestDataProvider";

export interface Paging<ItemT> {
    itemsInCurrentPage: ItemT[]
    count: number,
    pageCount: number
}

export interface RestOperator {
    id: number
    guid: string
    barcodeJpgFileName: string
    name: string
    mobile: string
    date: string

    numCustomers: number
    numDesignDocuments: number
    numQuotations: number
    numOrders: number

    firstCustomerId: number
}

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
                        title: "员工管理",
                        active: true
                    },
                ]}/>

                <SimpleTable
                    pageSize={10}
                    pageNum={0}
                    dataProvider={this.dataProvider}
                    resource={"operators/"}
                    action={"getOperators/"}
                    fields={[
                        {
                            title: "编号",
                            render: (item: RestOperator) => (item.id + "")
                        },
                        {
                            title: "创建时间",
                            render: (item: RestOperator) => (Formatting.toFormattedDateTimeString(item.date) + "")
                        },
                        {
                            title: "名称",
                            render: (item: RestOperator) => (item.name)
                        }
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
