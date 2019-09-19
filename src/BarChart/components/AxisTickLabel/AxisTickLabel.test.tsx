import React, { ReactElement } from 'react';
import TestRenderer, { TestRendererOptions } from 'react-test-renderer';
import AxisTickLabel from './AxisTickLabel';
import Axis from '../../enums/Axis';
import { ProgressPlugin } from 'webpack';


describe('Axis Text Label', () => {

    const label: string = '123456';

    const mockGetBBox = jest.fn().mockImplementation(() => {
        return {
            width: label.toString().length,
        };
    });

    const nodeMock = (element: ReactElement) => {
        if (element.type === 'text') {
            return {
                getBBox: () => {
                    return {
                        width: element.props.children[0].length,
                    };
                },
            };
        }

        return null;
    };


    describe('When mounted on an XAxis', () => {
        afterEach(() => {
            jest.resetAllMocks();
        });

        it('it renders consistently', () => {
            const component = TestRenderer.create(
                <AxisTickLabel
                    label={label}
                    xPos={0}
                    yPos={0}
                    axis={Axis.XAxis}
                />,
                { createNodeMock: nodeMock },
            );

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it adjusts to its text size', () => {

            let component = TestRenderer.create(
                <AxisTickLabel
                    label={label}
                    xPos={0}
                    yPos={0}
                    axis={Axis.XAxis}
                />,
                { createNodeMock: nodeMock },
            );

            const oldTransform = component.root.findByType('text').props.style.transform;

            component = TestRenderer.create(
                <AxisTickLabel
                    label={'123456789'}
                    xPos={0}
                    yPos={0}
                    axis={Axis.XAxis}
                />,
                { createNodeMock: nodeMock },
            );

            const newTransform = component.root.findByType('text').props.style.transform;

            expect(oldTransform).not.toStrictEqual(newTransform);
        });
    });

    describe('When mounted on a YAxis', () => {
        afterEach(() => {
            jest.resetAllMocks();
        });

        it('it renders consistently', () => {
            const component = TestRenderer.create(
                <AxisTickLabel
                    label={label}
                    xPos={0}
                    yPos={0}
                    axis={Axis.YAxis}
                />,
                { createNodeMock: nodeMock },
            );

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it adjusts to its text size', () => {

            let component = TestRenderer.create(
                <AxisTickLabel
                    label={label}
                    xPos={0}
                    yPos={0}
                    axis={Axis.YAxis}
                />,
                { createNodeMock: nodeMock },
            );

            const oldTransform = component.root.findByType('text').props.style.transform;

            component = TestRenderer.create(
                <AxisTickLabel
                    label={'123456789'}
                    xPos={0}
                    yPos={0}
                    axis={Axis.XAxis}
                />,
                { createNodeMock: nodeMock },
            );

            const newTransform = component.root.findByType('text').props.style.transform;

            expect(oldTransform).not.toStrictEqual(newTransform);
        });
    });
});
