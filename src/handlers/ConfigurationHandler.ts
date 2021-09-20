import metatype from '../types/metatype'

export default class ConfigurationHandler {
    public instanceConfigurationJson
    public systemConfigurationJson

    public category

    public process (configurations: unknown): void {
        if (configurations?.system) {
            this.processCategory(configurations.system.category)
            this.processSystemConfiguration(configurations.system)
        }
        if (configurations?.portletInstance) {
            this.processInstanceConfiguration(configurations.portletInstance)
        }
    }

    private processCategory (category): void {
        this.category = category
    }

    private processSystemConfiguration (systemConfiguration): void {
        this.systemConfigurationJson = systemConfiguration
    }

    private processInstanceConfiguration (instanceConfiguration): void {
        this.instanceConfigurationJson = instanceConfiguration
    }

    public getMetatype (fallback: string): metatype {
        return {
            category: this.category ?? fallback
        }
    }

    public getPortletPreferences (): string {
        const dfeter = {
            "availableLanguageIds": [],
            "fields": [
                {
                    "name": "instance-sample-configuration-field",
                    "label": {
                        "": "instance-sample-configuration-field-name"
                    },
                    "dataType": "string",
                    "type": "text",
                    "tip": {
                        "": "instance-sample-configuration-field-description"
                    },
                    "predefinedValue": {
                        "": "Instance Configuration"
                    }
                }
            ]
        }
    }
}