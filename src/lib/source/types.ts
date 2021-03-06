/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Type use for individual elements of a package.xml
 * ApexClass: Foo
 */
export interface ManifestEntry {
  type: string;
  name: string;
}

/**
 * Capture common source scope options across retrieve and deploy.
 */
export interface SourceOptions {
  manifest?: string;
  metadata?: string;
  sourcepath?: string;
}
