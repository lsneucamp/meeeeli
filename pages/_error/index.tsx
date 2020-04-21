import * as React from "react";
import { NextPage } from "next";
import { withTranslation } from "@Server/i18n";
import { WithTranslation } from "next-i18next";

const Error: NextPage<WithTranslation> = ({ t }) => {
    return <div>Error</div>;
};

export default withTranslation("common")(Error);
