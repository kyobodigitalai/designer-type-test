import { Button, Typography, FlexBox, ProgressIndicator, IconButton } from '@montage-ui/core'
import { questions } from '../data/questions.js'

export default function QuestionScreen({ currentIndex, onAnswer, onBack }) {
  const question = questions[currentIndex]
  const percent = Math.round(((currentIndex) / questions.length) * 100)

  return (
    <FlexBox
      flexDirection="column"
      sx={{
        minHeight: '100vh',
        maxWidth: '480px',
        margin: '0 auto',
        width: '100%',
        padding: '0 0 40px',
      }}
    >
      {/* 상단 진행 영역 */}
      <FlexBox
        flexDirection="column"
        gap={12}
        sx={{ padding: '20px 24px 0' }}
      >
        <FlexBox alignItems="center" justifyContent="space-between">
          {currentIndex > 0 ? (
            <IconButton
              size="medium"
              variant="ghost"
              onClick={onBack}
              aria-label="이전 질문으로"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </IconButton>
          ) : (
            <div style={{ width: 36 }} />
          )}
          <Typography variant="label2" color="label-assistive">
            {currentIndex + 1} / {questions.length}
          </Typography>
          <div style={{ width: 36 }} />
        </FlexBox>

        <ProgressIndicator percent={percent} />
      </FlexBox>

      {/* 질문 */}
      <FlexBox
        flexDirection="column"
        justifyContent="flex-start"
        sx={{ flex: 1, padding: '32px 24px 32px' }}
      >
        <Typography
          variant="title3"
          weight="bold"
          sx={{ marginBottom: '40px', lineHeight: '1.5' }}
        >
          {question.text}
        </Typography>

        <FlexBox flexDirection="column" gap={12}>
          {question.options.map((option, index) => (
            <Button
              key={index}
              size="large"
              variant="outlined"
              fullWidth
              onClick={() => onAnswer(option.type)}
              sx={{
                textAlign: 'left',
                justifyContent: 'flex-start',
                whiteSpace: 'normal',
                height: 'auto',
                padding: '20px',
                lineHeight: '1.5',
              }}
            >
              {option.label}
            </Button>
          ))}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}
