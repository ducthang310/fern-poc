import { Db } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';

export class CreateCollectionProducts1656497658424 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('products', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          title: 'products',
          required: [
            'productTenant',
            'name',
            'productBrands',
            'productFamilies',
            'productTypes',
            'materialId',
            'description',
            'countryOfOrigin',
            'manufacturer',
            'regions',
            'counties',
            'wards',
            'productVariants',
            'mediaUrls',
            'isMostPopular',
            'status',
            'auditTrail',
          ],
          properties: {
            productTenant: {
              bsonType: 'array',
              items: {
                title: 'masterLookup',
                required: ['id', 'name'],
                properties: {
                  id: {
                    bsonType: 'objectId',
                  },
                  name: {
                    bsonType: 'string',
                  },
                },
              },
            },
            name: {
              bsonType: 'array',
              items: {
                title: 'localisedValue',
                required: ['en'],
                properties: {
                  en: {
                    bsonType: 'string',
                  },
                },
              },
            },
            productBrands: {
              bsonType: 'array',
              items: {
                title: 'masterLookup',
                required: ['id', 'name'],
                properties: {
                  id: {
                    bsonType: 'objectId',
                  },
                  name: {
                    bsonType: 'string',
                  },
                },
              },
            },
            productFamilies: {
              bsonType: 'array',
              items: {
                title: 'masterLookup',
                required: ['id', 'name'],
                properties: {
                  id: {
                    bsonType: 'objectId',
                  },
                  name: {
                    bsonType: 'string',
                  },
                },
              },
            },
            productTypes: {
              bsonType: 'array',
              items: {
                title: 'masterLookup',
                required: ['id', 'name'],
                properties: {
                  id: {
                    bsonType: 'objectId',
                  },
                  name: {
                    bsonType: 'string',
                  },
                },
              },
            },
            materialId: {
              bsonType: 'string',
            },
            description: {
              bsonType: 'array',
              items: {
                title: 'localisedValue',
                required: ['en'],
                properties: {
                  en: {
                    bsonType: 'string',
                  },
                },
              },
            },
            countryOfOrigin: {
              bsonType: 'object',
              title: 'masterLookup',
              required: ['id', 'name'],
              properties: {
                id: {
                  bsonType: 'objectId',
                },
                name: {
                  bsonType: 'string',
                },
              },
            },
            manufacturer: {
              bsonType: 'object',
              title: 'selectedDropdownItem',
              required: ['id', 'name'],
              properties: {
                id: {
                  bsonType: 'objectId',
                },
                name: {
                  bsonType: 'string',
                },
              },
            },
            crops: {
              bsonType: 'array',
              items: {
                title: 'masterLookup',
                required: ['id', 'name'],
                properties: {
                  id: {
                    bsonType: 'objectId',
                  },
                  name: {
                    bsonType: 'string',
                  },
                },
              },
            },
            region: {
              bsonType: 'array',
              items: {
                title: 'masterLookup',
                required: ['id', 'name'],
                properties: {
                  id: {
                    bsonType: 'objectId',
                  },
                  name: {
                    bsonType: 'string',
                  },
                },
              },
            },
            counties: {
              bsonType: 'array',
              items: {
                title: 'masterLookup',
                required: ['id', 'name'],
                properties: {
                  id: {
                    bsonType: 'objectId',
                  },
                  name: {
                    bsonType: 'string',
                  },
                },
              },
            },
            wards: {
              bsonType: 'array',
              items: {
                title: 'masterLookup',
                required: ['id', 'name'],
                properties: {
                  id: {
                    bsonType: 'objectId',
                  },
                  name: {
                    bsonType: 'string',
                  },
                },
              },
            },
            productVariants: {
              bsonType: 'array',
              items: {
                title: 'productVariant',
                required: ['packagingType'],
                properties: {
                  packagingType: {
                    bsonType: 'string',
                  },
                  volume: {
                    bsonType: 'string',
                  },
                  metric: {
                    bsonType: 'string',
                  },
                  mediaUrls: {
                    bsonType: 'array',
                    items: {
                      bsonType: 'string',
                    },
                  },
                },
              },
            },
            mediaUrls: {
              bsonType: 'array',
              items: {
                bsonType: 'string',
              },
            },
            isMostPopular: {
              bsonType: 'bool',
            },
            status: {
              bsonType: 'string',
            },
            auditTrail: {
              bsonType: 'object',
              title: 'masterLookup',
              required: ['createdBy', 'createdAt', 'updatedBy', 'updatedAt'],
              properties: {
                createdBy: {
                  bsonType: 'string',
                },
                createdAt: {
                  bsonType: 'date',
                },
                updatedBy: {
                  bsonType: 'string',
                },
                updatedAt: {
                  bsonType: 'date',
                },
              },
            },
            createdAt: {
              bsonType: 'date',
            },
            updatedAt: {
              bsonType: 'date',
            },
          },
        },
      },
    });
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('products');
  }
}
