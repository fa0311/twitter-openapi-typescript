from hooks import *


class Config:
    OUTPUT_DIR = "dist/{0}"
    INPUT_DIR = "src/openapi"

    def main(self):
        return {
            "docs": {
                "openapi": [AddSecuritySchemesOnSecuritySchemes()],
                "schemas": [],
                "request": {
                    key: [
                        ReplaceQueryIdPlaceholder(split=-1),
                        SetResponsesHeader(suffix=None),
                        AddParametersOnContent(
                            split=-1, contentType="application/json"
                        ),
                    ]
                    for key in ["default", "user", "user-list", "tweet"]
                }
                | {
                    key: [
                        ReplaceQueryIdPlaceholder(split=-1),
                        SetResponsesHeader(suffix=None),
                        AddParametersOnParameters(
                            split=-1,
                            schemaType=None,
                        ),
                    ]
                    for key in ["post"]
                }
                | {
                    key: [
                        SetResponsesHeader(suffix="legacy"),
                        AddParametersOnParameters(
                            split=2,
                            schemaType=None,
                        ),
                    ]
                    for key in ["v1.1-get", "v2.0-get"]
                }
                | {
                    key: [
                        SetResponsesHeader(suffix="legacy"),
                        AddParametersOnBody(
                            split=2,
                            schemaType=None,
                            contentType="application/x-www-form-urlencoded",
                        ),
                    ]
                    for key in ["v1.1-post", "v2.0-post"]
                }
                | {"other": []},
            },
            "dart": {
                "openapi": [],
                "schemas": [],
                "request": {
                    key: [
                        ReplaceQueryIdPlaceholder(split=-1),
                        AddSecuritySchemesOnHeader(split=-1),
                        SetResponsesHeader(suffix=None),
                        AddParametersOnParameters(
                            split=-1,
                            schemaType="string",
                        ),
                    ]
                    for key in ["default", "user", "user-list", "tweet"]
                }
                | {
                    key: [
                        ReplaceQueryIdPlaceholder(split=-1),
                        AddSecuritySchemesOnHeader(split=-1),
                        SetResponsesHeader(suffix=None),
                        AddParametersOnBody(
                            split=-1,
                            schemaType=None,
                            contentType="application/json",
                        ),
                    ]
                    for key in ["post"]
                }
                | {
                    key: [
                        SetResponsesHeader(suffix="legacy"),
                        AddSecuritySchemesOnHeader(split=-1),
                        AddParametersOnParameters(
                            split=2,
                            schemaType=None,
                        ),
                    ]
                    for key in ["v1.1-get", "v2.0-get"]
                }
                | {
                    key: [
                        SetResponsesHeader(suffix="legacy"),
                        AddSecuritySchemesOnHeader(split=-1),
                        AddParametersOnBody(
                            split=2,
                            schemaType=None,
                            contentType="application/x-www-form-urlencoded",
                        ),
                    ]
                    for key in ["v1.1-post", "v2.0-post"]
                }
                | {"other": []},
            },
            "typescript": {
                "openapi": [AddSecuritySchemesOnSecuritySchemes()],
                "schemas": [RemoveDiscriminator()],
                "request": {
                    key: [
                        ReplaceQueryIdPlaceholder(split=-1),
                        SetResponsesHeader(suffix=None),
                        AddParametersOnParameters(
                            split=-1,
                            schemaType="string",
                        ),
                    ]
                    for key in ["default", "user", "user-list", "tweet"]
                }
                | {
                    key: [
                        ReplaceQueryIdPlaceholder(split=-1),
                        SetResponsesHeader(suffix=None),
                        AddParametersOnParameters(
                            split=-1,
                            schemaType="object",
                        ),
                    ]
                    for key in ["post"]
                }
                | {
                    key: [
                        SetResponsesHeader(suffix="legacy"),
                        AddParametersOnParameters(
                            split=2,
                            schemaType="object",
                        ),
                    ]
                    for key in ["v1.1-get", "v1.1-post", "v2.0-get", "v2.0-post"]
                }
                | {"other": []},
            },
            "test": {
                "openapi": [AddSecuritySchemesOnSecuritySchemes()],
                "schemas": [],
                "request": {
                    key: [
                        ReplaceQueryIdPlaceholder(split=-1),
                        SetResponsesHeader(suffix=None),
                        AddParametersOnParameters(
                            split=-1,
                            schemaType="string",
                        ),
                    ]
                    for key in ["default", "user", "user-list", "tweet"]
                }
                | {
                    key: [
                        ReplaceQueryIdPlaceholder(split=-1),
                        SetResponsesHeader(suffix=None),
                        AddParametersOnParameters(
                            split=-1,
                            schemaType="string",
                        ),
                    ]
                    for key in ["post"]
                }
                | {
                    key: [
                        SetResponsesHeader(suffix="legacy"),
                        AddParametersOnParameters(
                            split=2,
                            schemaType="object",
                        ),
                    ]
                    for key in ["v1.1-get", "v1.1-post", "v2.0-get", "v2.0-post"]
                }
                | {"other": []},
            },
        }
