import { DropdownOptions, TriggerType, TriggerEventTypes } from './types';
import type { Instance as PopperInstance } from '@popperjs/core';

export declare interface DropdownInterface {
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: DropdownOptions;
    _visible: boolean;
    _popperInstance: PopperInstance;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;

    _init(): void;
    _createPopperInstance(): PopperInstance;
    _setupEventListeners(): void;
    _setupClickOutsideListener(): void;
    _removeClickOutsideListener(): void;
    _handleClickOutside(ev: Event, targetEl: HTMLElement): void;
    _getTriggerEvents(triggerType: TriggerType): TriggerEventTypes;
    isVisible(): boolean;
    toggle(): void;
    show(): void;
    hide(): void;
}
