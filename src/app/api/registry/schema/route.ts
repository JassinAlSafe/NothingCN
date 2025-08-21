import { NextResponse } from 'next/server';

const registrySchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Registry Schema",
  "description": "Schema for NothingCN component registry",
  "type": "object",
  "properties": {
    "$schema": {
      "type": "string",
      "format": "uri"
    },
    "name": {
      "type": "string",
      "description": "Registry name"
    },
    "homepage": {
      "type": "string",
      "format": "uri",
      "description": "Registry homepage URL"
    },
    "items": {
      "type": "array",
      "description": "Array of registry items",
      "items": {
        "$ref": "#/definitions/registryItem"
      }
    }
  },
  "required": ["name", "items"],
  "definitions": {
    "registryItem": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Unique identifier for the item"
        },
        "type": {
          "type": "string",
          "enum": [
            "registry:block",
            "registry:component",
            "registry:ui",
            "registry:lib",
            "registry:hook",
            "registry:page",
            "registry:file",
            "registry:style",
            "registry:theme",
            "registry:item"
          ]
        },
        "title": {
          "type": "string",
          "description": "Human-readable name"
        },
        "description": {
          "type": "string",
          "description": "Item description"
        },
        "files": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "path": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "target": {
                "type": "string"
              }
            },
            "required": ["path", "type"]
          }
        },
        "dependencies": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "registryDependencies": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "tailwind": {
          "type": "object"
        },
        "cssVars": {
          "type": "object",
          "properties": {
            "light": {
              "type": "object"
            },
            "dark": {
              "type": "object"
            }
          }
        },
        "categories": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "docs": {
          "type": "string"
        }
      },
      "required": ["name", "type", "title", "description", "files"]
    }
  }
};

export async function GET() {
  return NextResponse.json(registrySchema);
}