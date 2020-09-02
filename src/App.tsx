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
import {SimpleTextInput} from "@itecgo/blocks/dist/inputs/SimpleTextInput/SimpleTextInput";
import {SimpleUpdateForm} from "@itecgo/blocks/dist/forms/SimpleUpdateForm/SimpleUpdateForm";
import {SimpleAddForm} from "@itecgo/blocks/dist/forms/SimpleAddForm/SimpleAddForm";
import {Container} from "react-bootstrap";
import {SimpleToast, Toastify} from "@itecgo/blocks/dist/components/SimpleToast/SimpleToast";
import {SimpleToastType} from "@itecgo/blocks/dist/components/SimpleToast/SimpleToastType";
import {SimpleActionsField} from "@itecgo/blocks/dist/fields/SimpleActionsField";

export class App extends React.Component<any, any> {
    dataProvider: SimpleDataProvider

    constructor(props: any) {
        super(props);

        this.dataProvider = new SimpleRestDataProvider("http://www.ikzao.com:5000/rest/");

        this.state = {
        };
    }

    render() {
        let resource = "customers/";

        let fields = [
            new SimpleNumberField("编号", "id", 0),
            new SimpleDateTimeField("创建时间", "date"),
            new SimpleTextField("名称", "name"),
            new SimpleTextField("手机号码", "mobile"),
            new SimpleBooleanField("是否合法", "mobileIsValid"),
            new SimpleActionsField("操作", [
                {
                    text: "编辑",
                    urlFunc: item => `http://www.ikzao.com:3000/Customer/${item.id}`
                }
            ])
        ];

        return (
            <Container>
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
                    initialPageNum={0}
                    dataProvider={this.dataProvider}
                    resource={resource}
                    action={"getCustomers/"}
                    fields={fields}
                />

                <SimpleToast/>

                <SimpleAddForm
                    dataProvider={this.dataProvider}
                    resource={resource}
                    addAction={"addCustomer/"}
                    addExtraData={{
                        operatorId: 1
                    }}
                    inputs={
                        [
                            <SimpleTextInput label={"名称"} name={"name"}/>,
                            <SimpleTextInput label={"公司名称"} name={"companyName"}/>,
                            <SimpleTextInput label={"手机号码"} name={"mobile"}/>,
                            <SimpleTextInput label={"电话号码"} name={"phone"}/>,
                            <SimpleTextInput label={"微信"} name={"wechat"}/>,
                            <SimpleTextInput label={"旺旺"} name={"wangwang"}/>,
                        ]
                    }
                    submitButtonText={"添加"}
                    onSuccess={() => {
                        Toastify(
                            SimpleToastType.Success,
                            "添加客户成功!"
                        );
                    }}
                    onFailure={() => {
                        Toastify(
                            SimpleToastType.Error,
                            "添加客户失败!"
                        );
                    }}
                />

                <SimpleUpdateForm
                    dataProvider={this.dataProvider}
                    resource={resource}
                    getByIdAction={"getCustomer/"}
                    updateAction={"updateCustomer/"}
                    updateExtraData={{
                        operatorId: 1
                    }}
                    id={4153}
                    inputs={
                        [
                            <SimpleTextInput label={"名称"} name={"name"}/>,
                            <SimpleTextInput label={"公司名称"} name={"companyName"}/>,
                            <SimpleTextInput label={"手机号码"} name={"mobile"}/>,
                            <SimpleTextInput label={"电话号码"} name={"phone"}/>,
                            <SimpleTextInput label={"微信"} name={"wechat"}/>,
                            <SimpleTextInput label={"旺旺"} name={"wangwang"}/>,
                        ]
                    }
                    submitButtonText={"更新"}
                    onSuccess={() => {
                        Toastify(
                            SimpleToastType.Success,
                            "更新客户成功!"
                        );
                    }}
                    onFailure={() => {
                        Toastify(
                            SimpleToastType.Error,
                            "更新客户失败!"
                        );
                    }}
                />

                <SimpleFooter brand={{
                    title: "蚁克造 (C) 2020",
                    href: "http://www.ikzao.com:3000/"
                }}/>
            </Container>
        );
    }
}
