/* tslint:disable */
/* eslint-disable */
/**
 * Agent Protocol
 * Specification of the API protocol for communication with an agent.
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
import type { Artifact } from './Artifact'
import {
  ArtifactFromJSON,
  ArtifactFromJSONTyped,
  ArtifactToJSON,
} from './Artifact'

/**
 *
 * @export
 * @interface Step
 */
export interface Step {
  /**
   * Input prompt for the step.
   * @type {string}
   * @memberof Step
   */
  input?: string | null
  /**
   * Input parameters for the task step. Any value is allowed.
   * @type {object}
   * @memberof Step
   */
  additionalInput?: object
  /**
   * The ID of the task this step belongs to.
   * @type {string}
   * @memberof Step
   */
  taskId: string
  /**
   * The ID of the task step.
   * @type {string}
   * @memberof Step
   */
  stepId: string
  /**
   * The name of the task step.
   * @type {string}
   * @memberof Step
   */
  name?: string | null
  /**
   * The status of the task step.
   * @type {string}
   * @memberof Step
   */
  status: StepStatusEnum
  /**
   * Output of the task step.
   * @type {string}
   * @memberof Step
   */
  output?: string | null
  /**
   * Output that the task step has produced. Any value is allowed.
   * @type {object}
   * @memberof Step
   */
  additionalOutput?: object | null
  /**
   * A list of artifacts that the step has produced.
   * @type {Array<Artifact>}
   * @memberof Step
   */
  artifacts: Array<Artifact>
  /**
   * Whether this is the last step in the task.
   * @type {boolean}
   * @memberof Step
   */
  isLast: boolean
}

/**
 * @export
 */
export const StepStatusEnum = {
  Created: 'created',
  Running: 'running',
  Completed: 'completed',
} as const
export type StepStatusEnum =
  (typeof StepStatusEnum)[keyof typeof StepStatusEnum]

/**
 * Check if a given object implements the Step interface.
 */
export function instanceOfStep(value: object): boolean {
  let isInstance = true
  isInstance = isInstance && 'taskId' in value
  isInstance = isInstance && 'stepId' in value
  isInstance = isInstance && 'status' in value
  isInstance = isInstance && 'artifacts' in value
  isInstance = isInstance && 'isLast' in value

  return isInstance
}

export function StepFromJSON(json: any): Step {
  return StepFromJSONTyped(json, false)
}

export function StepFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Step {
  if (json === undefined || json === null) {
    return json
  }
  return {
    input: !exists(json, 'input') ? undefined : json['input'],
    additionalInput: !exists(json, 'additional_input')
      ? undefined
      : json['additional_input'],
    taskId: json['task_id'],
    stepId: json['step_id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    status: json['status'],
    output: !exists(json, 'output') ? undefined : json['output'],
    additionalOutput: !exists(json, 'additional_output')
      ? undefined
      : json['additional_output'],
    artifacts: (json['artifacts'] as Array<any>).map(ArtifactFromJSON),
    isLast: json['is_last'],
  }
}

export function StepToJSON(value?: Step | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    input: value.input,
    additional_input: value.additionalInput,
    task_id: value.taskId,
    step_id: value.stepId,
    name: value.name,
    status: value.status,
    output: value.output,
    additional_output: value.additionalOutput,
    artifacts: (value.artifacts as Array<any>).map(ArtifactToJSON),
    is_last: value.isLast,
  }
}